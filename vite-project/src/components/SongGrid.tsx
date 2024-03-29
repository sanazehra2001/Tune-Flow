import { Box, Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import useSongs from "../hooks/useSongs";
import SongCard from "./SongCard";

const SongGrid = () => {
  const { data, error } = useSongs();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Typography>{error}</Typography>}

      <Grid
        container
        spacing={{ xs: 2, lg: 2 }}
        columns={{ xs: 1, sm: 2, lg: 3, xl: 5 }}
        padding={1}
      >
        {data.map((song) => (
          <Grid item xs={1} sm={1} lg={1} xl={1}>
            <SongCard key={song.id} song={song} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SongGrid;
