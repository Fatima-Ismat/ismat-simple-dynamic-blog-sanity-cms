import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const imageBuilder = createImageUrlBuilder({ 
  projectId: projectId ||'', 
  dataset: dataset || '',
 })

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max').url()
}