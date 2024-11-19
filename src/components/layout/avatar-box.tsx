import { User } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const UserAvatarStyles = {
  BUTTON: "relative h-8 w-8 rounded-full",
  AVATAR: "h-8 w-8",
  DROPDOWN_MENU_CONTENT: '"w-56"',
  DROPDOWN_LABEL: "font-normal",
  P_DIV: "flex flex-col space-y-1",
  P1: "text-sm font-medium leading-none",
  p2: "text-xs leading-none text-muted-foreground",
};

export default function UserAvatar({ user }: { user: User }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={UserAvatarStyles.BUTTON}
        >
          <Avatar className={UserAvatarStyles.AVATAR}>
            {/* <AvatarImage src={user?.image || ""} alt={user?.name || ""} /> */}
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={UserAvatarStyles.DROPDOWN_MENU_CONTENT}
        align="end"
        forceMount
      >
        <DropdownMenuLabel className={UserAvatarStyles.DROPDOWN_LABEL}>
          <div className={UserAvatarStyles.P_DIV}>
            <p className={UserAvatarStyles.P1}>{user?.name || ""}</p>
            <p className={UserAvatarStyles.p2}>{user?.email || ""}</p>
          </div>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
