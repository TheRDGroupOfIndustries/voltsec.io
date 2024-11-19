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
import { createCertification } from "@/core/server/account/Certification/createCertificate";
import { toast } from "sonner";

const CreateCertificateDialog = () => {
  const [formData, setFormData] = useState({
    eId: "",
    issuedTo: "",
    expiryDate: "",
  });
  const { mutate, isPending } = useMutation(createCertification);
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { success, error } = await mutate({
      eId: formData.eId,
      issuedTo: formData.issuedTo,
      expiryDate: new Date(formData.expiryDate),
    });
    if (success) toast.success(success);
    else toast.error(error);
    setFormData({ eId: "", issuedTo: "", expiryDate: "" });
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Certificate</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Issue A New Certificate</DialogTitle>
          <DialogDescription>
            Fill the following form to issue a new certificate.
          </DialogDescription>
        </DialogHeader>
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
              disabled={isPending}
              type="submit"
            >
                        {isPending?"Uploading...":"Add Certificate"}

            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default CreateCertificateDialog;
