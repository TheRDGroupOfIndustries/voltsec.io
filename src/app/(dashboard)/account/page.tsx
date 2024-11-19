import PentestScanner from '@/components/dashboard/Scanner'
import { getPentestSettings } from "@/core/server/account/pentest/getPentestSettings";
import React from 'react'


async function page() {
  const pentestSetting = await getPentestSettings();
  return (
    <PentestScanner settings={pentestSetting} />
  )
}

export default page