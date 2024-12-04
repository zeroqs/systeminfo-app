import type { Systeminformation } from 'systeminformation'

import si from 'systeminformation'

export interface MemData {
  memory: Systeminformation.MemData
  success: boolean
}

export default defineEventHandler(async () => {
  try {
    const memData = await si.mem()

    return {
      success: true,
      memory: memData,
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
