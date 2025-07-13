import {z} from 'zod'

const configSchema = z.object({
    NEXT_PUBLIC_API_ENDPOINT: z.string()
})

const configProject = configSchema.safeParse({
    NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT
})

if (!configProject.success) {
    console.error(configProject.error.issues)
    throw new Error("Các khai báo trong môi trường không hợp lệ")
}

const envConfig = configProject.data
export default envConfig