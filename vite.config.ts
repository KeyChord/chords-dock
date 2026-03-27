import keychord from '@keychord/vite-plugin';

export default {
  plugins: [keychord({
    vendor: [
      '@keychord/chords-menu'
    ]
  })]
}
