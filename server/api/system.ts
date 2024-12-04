import type { Systeminformation } from 'systeminformation'

import si from 'systeminformation'

export interface SystemData {
  system: Systeminformation.SystemData
  success: boolean
}

export default defineEventHandler(async () => {
  try {
    const systemData = await si.system()
    return {
      success: true,
      system: systemData,
    }
  }
  catch (error) {
    console.error(error)
    return {
      success: false,
      error: 'Failed to retrieve System data',
    }
  }
})
