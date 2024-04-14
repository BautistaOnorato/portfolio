import { useState } from "react"

interface ProhectImageProps {
  name: string
  desktopImage: string
  tabletImage: string
  mobileImage: string
}

const ProjectImage = ({ name, desktopImage, tabletImage, mobileImage }: ProhectImageProps) => {
  const [mainImage, setMainImage] = useState(desktopImage)

  return (
    <div className="flex items-center justify-betweem flex-col h-full">
    <div>
      <img
        src={mainImage}
        className="rounded-md tablet:min-w-[400px]"
        alt={`${name} main image`}
        id="main-img"
      />
    </div>
    <div className="flex items-center justify-center gap-4">
      <button id="desktop-image" className="p-2 rounded-md flex items-center justify-center" onClick={() => setMainImage(desktopImage)}>
        <img
          id="desktop-img"
          src={desktopImage}
          alt={`${name} desktop image`}
          className={`w-16 p-2 transition-all duration-200 rounded-md ${desktopImage === mainImage ? "active-view" : "view"}`}
        />
      </button>
      <button id="tablet-image" className="p-2 rounded-md flex items-center justify-center" onClick={() => setMainImage(tabletImage)}>
        <img
          id="tablet-img"
          src={tabletImage}
          alt={`${name} tablet image`}
          className={`w-16 p-2 transition-all duration-200 rounded-md ${tabletImage === mainImage ? "active-view" : "view"}`}
        />
      </button>
      <button id="desktop-image" className="p-2 rounded-md flex items-center justify-center" onClick={() => setMainImage(mobileImage)}>
        <img
          id="mobile-img"
          src={mobileImage}
          alt={`${name} mobile image`}
          className={`w-16 p-2 transition-all duration-200 rounded-md ${mobileImage === mainImage ? "active-view" : "view"}`}
        />
      </button>
    </div>
  </div>
  )
}

export default ProjectImage