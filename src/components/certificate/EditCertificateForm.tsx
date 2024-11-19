import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import useMutation from "@/core/hooks/useMutation";
import { toast } from "sonner";
import { Certificates } from "@prisma/client";
import { UpdateCertification } from "@/core/server/account/Certification/IdCertificate";

const EditCertificateForm = ({
  certificate,
}: {
  certificate: Certificates;
}) => {
  const parsedExpiryDate = certificate.expiryDate.toISOString().split("T")[0];
  const [formData, setFormData] = useState({
    eId: certificate.eId,
    issuedTo: certificate.issuedTo,
    expiryDate: parsedExpiryDate,
  });
  const hasChanged =
    formData.eId === certificate.eId &&
    formData.expiryDate === parsedExpiryDate &&
    formData.issuedTo === certificate.issuedTo;

  const { mutate, isPending } = useMutation(UpdateCertification);
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { success, error } = await mutate({
      id: certificate.id,
      eId: formData.eId,
      issuedTo: formData.issuedTo,
      expiryDate: new Date(formData.expiryDate),
    });
    if (success) toast.success(success);
    else toast.error(error);
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 py-4"
    >
      <div className="grid grid-cols-4 items-center gap-4">
        <Label
          htmlFor="issuedTo"
          className="text-right"
        >
          Issued To
        </Label>
        <Input
          value={formData.issuedTo}
          onChange={handleChange}
          id="issuedTo"
          name="issuedTo"
          placeholder="The person the certificate is issued to."
          className="col-span-3"
          required
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label
          htmlFor="eId"
          className="text-right"
        >
          Certificate Id
        </Label>
        <Input
          value={formData.eId}
          onChange={handleChange}
          id="eId"
          name="eId"
          placeholder="1234 5678 ..."
          className="col-span-3"
          required
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label
          htmlFor="expiryDate"
          className="text-right"
        >
          Expiry Date
        </Label>
        <Input
          value={formData.expiryDate}
          onChange={handleChange}
          id="expiryDate"
          name="expiryDate"
          type="date"
          className="col-span-3"
          required
        />
      </div>
      <DialogFooter>
        <Button
          disabled={isPending || hasChanged}
          type="submit"
        >
          {isPending ? "Updating..." : "Update Certificate"}
        </Button>
      </DialogFooter>
    </form>
  );
};
export default EditCertificateForm;
