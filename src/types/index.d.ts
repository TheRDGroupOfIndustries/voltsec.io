// Define the user interface
export type IRole = 'USER' | 'MEMBER' | 'ADMIN'
export type IMembership = 'FREE' | 'PAID' | 'ENTERPRISE'

export interface IUser {
  _id?: string
  name: string
  email: string
  image: string
  emailVerified?: boolean | null
  membership: IMembership
  role: IRole
  voltcharge: number
}

export interface ISession {
  _id?: string
  sessionToken: string
  userId: string
  expires: Date
}

export interface IAccount {
  _id?: string
  provider: 'github' | 'google'
  type: string
  providerAccountId: number
  access_token: string
  token_type: string
  scope: string
  userId: string
}
export interface IPentest {
  _id?: string
  pentestType: 'web' | 'network' | 'cloud' | 'mobile'
  scope: string
  pentestStatus: 'pending' | 'complete' | 'rejected'
  email: string
  date: Date
}
export interface ICertificate {
  certificateId: string
  issuedDate: Date
  expiryDate: Date
  issuedTo: string
}
export interface IHelpDesk {
  _id?: string
  subject: string
  email: string
  name: string
  request: string
  date: Date
  status: string | 'pending' | 'complete' | 'rejected'
}
export interface IContact {
  message: string
  subject: string
  email: string
}
export interface IEnhance {
  toggleOn: boolean
  businessSummary: string
  extraKeyDetails: string
  uploadedDoc: string
}
export interface IVerification {
  issuedDate: string
  website: string
  verified: Boolean
  upcomingPentest: Date
  status: string
  reputation: string
}
export interface IPartnership {
  userName: string
  companyName: string
  email: string
  userPhone: number
  dealDetails: string
  clientName: string
  briefRequirements: string
  additionalComments: string
}
export interface IShedule {
  pentestType: string
  scope: string
  timeline: string
  time: string
  emailReportTo: string
  emailReportToggle: boolean
}
export interface IPentestSetting {
  id?: string
  selectedBot: 'Voltbot' | 'Hackwing' | string
  selectedScanMode: 'LightScan' | 'DeepScan' | 'BalancedScan' | string
  email: string
}
export interface IStatus {
  success: number
  failed: number
  notFound: number
  forbidden: number
  badRequest?: number
  internalServerError?: number
  serviceUnavailable?: number
  gatewayTimeout?: number
}
