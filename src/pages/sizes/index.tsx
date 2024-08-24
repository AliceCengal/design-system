import { Box } from "../../components/common/box";
import { EditIcon, SearchIcon } from "../../components/icons";

export default function SizesPage() {
  return (
    <main style={{ overflow: "auto", marginBlock: "8px" }}>
      <Box as="h1" textAlign="center">
        Sizes
      </Box>

      <div
        style={{
          fontFamily: "monospace",
          position: "relative",
          marginInline: "auto",
          padding: "1.25rem",
          alignContent: "end",
          width: 1272,
          height: 832,
          backgroundColor: "hsla(0, 75%, 50%, 20%)",
          border: "1px solid gray",
        }}
      >
        lg - 1272px - ~80rem
        <div
          style={{
            position: "absolute",
            padding: "1rem",
            inset: -1,
            alignContent: "end",
            width: 960,
            height: 768,
            backgroundColor: "hsla(30, 75%, 50%, 20%)",
            border: "1px solid gray",
          }}
        >
          md - 960px - 60rem
          <div
            style={{
              position: "absolute",
              padding: "0.75rem",
              inset: -1,
              alignContent: "end",
              width: 636,
              height: 704,
              backgroundColor: "hsla(60, 75%, 50%, 20%)",
              border: "1px solid gray",
            }}
          >
            sm - 636px - ~40rem
            <div
              style={{
                position: "absolute",
                padding: "0.5rem",
                inset: -1,
                alignContent: "end",
                width: 312,
                height: 640,
                backgroundColor: "hsla(90, 75%, 50%, 20%)",
                border: "1px solid gray",
              }}
            >
              xs - 312px - ~20rem
              <div
                style={{
                  position: "absolute",
                  inset: -1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "2px",
                    padding: "8px",
                  }}
                >
                  <div
                    style={{
                      width: 128,
                      height: 128,
                      backgroundColor: "hsla(90, 75%, 50%, 20%)",
                      border: "1px solid gray",
                      paddingInline: "0.5rem",
                      paddingBlock: "0.25rem",
                    }}
                  >
                    avatar
                    <br />
                    128 x 128
                    <br />8 rem
                  </div>
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      backgroundColor: "hsla(90, 75%, 50%, 20%)",
                      border: "1px solid gray",
                      paddingInline: "0.5rem",
                      paddingBlock: "0.25rem",
                    }}
                  >
                    thumb
                    <br />
                    64x64
                  </div>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      backgroundColor: "hsla(90, 75%, 50%, 20%)",
                      border: "1px solid gray",
                      textAlign: "center",
                      alignContent: "center",
                    }}
                  >
                    I
                  </div>
                  <div style={{ lineHeight: 1 }}>
                    icon
                    <br />
                    32x32
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "2px",
                    padding: "8px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      height: 40,
                      backgroundColor: "hsla(90, 75%, 50%, 20%)",
                      border: "1px solid gray",
                      alignContent: "center",
                      paddingInline: "0.75rem",
                      borderRadius: "0.25rem",
                    }}
                  >
                    <span>button</span>
                  </div>
                  <div
                    style={{
                      height: 40,
                      width: 40,
                      backgroundColor: "hsla(90, 75%, 50%, 20%)",
                      border: "1px solid gray",
                      alignContent: "center",
                      textAlign: "center",
                      borderRadius: "99vw",
                    }}
                  >
                    B
                  </div>
                  &emsp;
                  <span style={{ alignContent: "center" }}>height 40px</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "2px",
                    padding: "8px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      height: 40,
                      backgroundColor: "hsla(90, 75%, 50%, 20%)",
                      border: "1px solid gray",
                      alignContent: "center",
                      paddingInline: "0.75rem",
                      borderRadius: "0.25rem",
                    }}
                  >
                    <span>button</span>&ensp;
                    <SearchIcon />
                  </div>
                  <div
                    style={{
                      height: 40,
                      width: 40,
                      backgroundColor: "hsla(90, 75%, 50%, 20%)",
                      border: "1px solid gray",
                      alignContent: "center",
                      textAlign: "center",
                      borderRadius: "99vw",
                    }}
                  >
                    <EditIcon />
                  </div>
                </div>
                <div
                  style={{ paddingInline: "0.5rem", fontFamily: "sans-serif" }}
                >
                  <p>
                    handian ajur. nilin anyah sajah kupalkan jaya kayipan, ada
                    eying, ambauan buja, oya linulkan, daying gorga asan mapim
                    manat pinyus lugi surah. reli oga.
                  </p>
                  <p>
                    hepatan aba, puwa ayu ganggah. agur wacuh. ayah lata, ejik
                    aci akui donji. lonin ahal sapuh. keka goyap eka nahar uspa,
                    nangun bucal tinakan,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
