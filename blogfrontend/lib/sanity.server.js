import { createClient } from "next-sanity"
import { config } from "./config"

export const sanityClient = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: 'skGYKrbAKLqR86uuRkTg55G3sSHlrAqIiIbdRRwcBu4G7Ohx5AdRe8sjeJ8ueMpDHOmUCtfXVord3Pmm6mJ9t5twp8ai3KGiuU6Azz8Fs9kYigjEuMBBE031SxA3a2ZlnQseVjvPlwAcYji2EuOZaDDxipmYnw1p66KLrpHJitFeMFzKv6nu'
})

export const getClient = (usePreview) => usePreview ? previewClient: sanityClient // select client from  