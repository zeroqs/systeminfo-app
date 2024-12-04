import si from 'systeminformation'

export interface GeneralApiResponse {
  success: boolean
  general: GeneralInfo
}

interface GeneralInfo {
  cpu: CpuInfo
  osInfo: {
    platform: string
    release: string
  }
  system: {
    model: string
    manufacturer: string
  }
}

interface CpuInfo {
  manufacturer: string
  brand: string
  vendor: string
  family: string
  model: string
  stepping: string
  revision: string
  voltage: string
  speed: number // GHz
  speedMin: number // GHz
  speedMax: number // GHz
  governor: string
  cores: number
  physicalCores: number
  performanceCores: number
  efficiencyCores: number
  processors: number
  socket: string
  flags: string
  virtualization: boolean
  cache: {
    l1d: number // Bytes
    l1i: number // Bytes
    l2: number // Bytes
    l3: number | null // Bytes
  }
}

const generalSystemDataConfig = {
  cpu: '*',
  osInfo: 'platform, release',
  system: 'model, manufacturer',
}

export default defineEventHandler(async () => {
  try {
    const generalData = await si.get(generalSystemDataConfig)
    return {
      success: true,
      general: generalData,
    }
  }
  catch (error) {
    console.error(error)
    return {
      success: false,
      error: 'Failed to retrieve General data',
    }
  }
})
