import type { Systeminformation } from 'systeminformation'

import si from 'systeminformation'

export interface CpuData {
  cpu: Systeminformation.CpuData
  success: boolean
}

export default defineEventHandler(async () => {
  try {
    const cpuData = await si.cpu()
    return {
      success: true,
      cpu: cpuData,
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
