import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			components: path.resolve(__dirname, 'src/components'),
			stories: path.resolve(__dirname, 'src/stories'),
		},
	},
});
