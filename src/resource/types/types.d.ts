import { User } from "@prisma/client";

// AUTH INTERFACE 
export interface NextAuthProviderInterface {
  children?: React.ReactNode;
}

// HEADER INTERFACE
export interface ISubmenu {
  title: string;
  newTab: boolean;
  slug: string;
}

export interface IFooterItem {
  title: string;
  submenu?: ISubmenu[];
}

export interface IFooterMenu {
  footer: IFooterItem[];
}

export interface IPageLink {
  title: string;
  description: string;
  slug: string;
}

export interface IMenuItem {
  title: string;
  description: string;
  newTab: boolean;
  slug: string;
  submenu?: IMenuItem[];
  page: IPageLink;
}

export interface INavigationMenu {
  menu: IMenuItem[];
}

interface Item {
  title: string;
  url: string;
  items?: Item[];
}

interface Items {
  items?: Item[];
}
// prisma model types
const user:User = {}
const account:Account = {}
const session:Session = {}
const verificationToken:VerificationToken = {}
const subscription:Subscription = {}
const pentestType:PentestType = {}
const pentestStatus:PentestStatus = {}
const membership: Membership = {}
const pentest:Pentest = {}
const selectedScanMode:selectedScanMode = {}



export type TableOfContents = Items;
