import type { Systeminformation } from 'systeminformation'

import si from 'systeminformation'

export interface OsData {
  os: Systeminformation.OsData
  success: boolean
}

export default defineEventHandler(async () => {
  try {
    const osData = await si.osInfo()

    return {
      success: true,
      os: osData,
    }
  }
  catch (error) {
    console.error(error)
    return {
      success: false,
      error: 'Failed to retrieve CPU data',
    }
  }
})
