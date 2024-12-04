import type { Systeminformation } from 'systeminformation'

import si from 'systeminformation'

export interface GraphicsData {
  graphics: Systeminformation.GraphicsData
  success: boolean
}

export default defineEventHandler(async () => {
  try {
    const graphicsData = await si.graphics()
    return {
      success: true,
      graphics: graphicsData,
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
