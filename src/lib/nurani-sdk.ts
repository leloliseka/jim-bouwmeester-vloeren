// Placeholder Nurani SDK
// Replace with actual SDK content when available

export class NuraniClient {
  constructor(private config: { tenantId: string; apiKey: string }) {}

  // Add methods here
  async get(endpoint: string) {
    console.log(`Fetching ${endpoint} for tenant ${this.config.tenantId}`)
    return {}
  }
}

export const nurani = new NuraniClient({
  tenantId: process.env.NEXT_PUBLIC_NURANI_TENANT_ID || '',
  apiKey: process.env.NURANI_API_KEY || '',
})
