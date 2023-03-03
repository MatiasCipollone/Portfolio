import { createSlice } from "@reduxjs/toolkit";
import URL from "../../common/types/url-types";
import { TimelineState } from "./timelime-types";

const initialState: TimelineState = {
  steps: [
    {
      content: [
        "Semi-presencial, trabajo con un equipo de 5 programadores ",
        "Investigamos y desarrollamos acorde a la solicitud de los clientes",
      ],
      header: "Jun 2022 - Present",
      title: {
        position: "Front-end developer",
        company: {
          name: "ADOX.S.A.",
          url: URL.ADOX,
        },
      },
    },
  ],
};

const componentReducer = createSlice({
  name: "timeline",
  initialState,
  reducers: {},
});

export default componentReducer.reducer;
