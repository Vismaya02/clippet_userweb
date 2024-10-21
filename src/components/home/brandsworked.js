import {
    hdfclogo,
    liciousLogo,
    olaLogo,
    swiggyLogo,
    tataLogo,
    UCLogo,
    zomatoLogo,
  } from "../image";
  import {Image} from "@fluentui/react-components";

  const BrandsWorkedWith = () => {
    const logos = [
        { src: zomatoLogo, alt: "Clippet_Design_Services.png" },
        { src: hdfclogo, alt: "Clippet_Design_Services.png" },
        { src: tataLogo, alt: "Clippet_Design_Services.png" },
        { src: UCLogo, alt: "Clippet_Design_Services.png" },
        { src: olaLogo, alt: "Clippet_Design_Services.png" },
        { src: liciousLogo, alt: "Clippet_Design_Services.png" },
        { src: swiggyLogo, alt: "Clippet_Design_Services.png" },
      ];
    return(
        <>
        <div
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            overflowX: "visible",
            whiteSpace: "normal",
          }}
          >
            {logos.map((logo,index)=>(
                <div key={index}
                style={{
                    flex: "1",
                    textAlign: "center",
                    padding: "10px",
                    marginRight: "0",
                  }}>
                <Image
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={40}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
            </div>))}
        </div>
        </>
    )
}
export default BrandsWorkedWith;