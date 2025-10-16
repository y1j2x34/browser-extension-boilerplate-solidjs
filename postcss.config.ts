import { Config } from 'postcss-load-config';
import postcssPresetEnv from 'postcss-preset-env';

export default {
    plugins: [
        postcssPresetEnv({
            stage: 3,
            features: {},
        }),
    ],
} satisfies Config;
