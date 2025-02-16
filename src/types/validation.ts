import type { z } from 'zod'
import type { baseInputValidationSchema } from '../constants/validation'

export type BaseInputValidationSchema = z.infer<
	typeof baseInputValidationSchema
>
