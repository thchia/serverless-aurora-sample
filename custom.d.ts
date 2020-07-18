declare module 'data-api-client' {
  import type { ClientConfiguration } from 'aws-sdk/clients/rdsdataservice'
  export interface DataApiClientParams {
    secretArn: string
    resourceArn: string
    database?: string
    keepAlive?: boolean
    hydrateColumnNames?: boolean
    sslEnabled?: boolean
    options?: ClientConfiguration
    region?: string
  }

  interface DataApiClientQuery {
    <T = any>(sql: string, params?: unknown): Promise<DataApiClientResult<T>>
    <T = any>(obj: {
      sql: string
      parameters: unknown
      database?: string
      hydrateColumnNames?: boolean
    }): Promise<DataApiClientResult<T>>
  }

  interface DataApiClientResult<T> {
    records: T
  }

  export interface DataApiClient {
    query: DataApiClientQuery
    // More methods to add
  }

  export default function (params: DataApiClientParams): DataApiClient
}
