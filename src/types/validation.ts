import type { z } from 'zod'
import type { baseInputValidationSchema } from '../constants/validation'

export type BaseInputValidationSchemaType = z.infer<
	typeof baseInputValidationSchema
>
