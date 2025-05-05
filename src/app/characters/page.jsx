import { Box, Grid, Card, CardContent, Typography, CardMedia } from "@mui/material";

async function fetchData() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  return data;
}

function RickAndMortyCard({ character }) {
  return (
    <Card sx={{ transition: "0.3s", "&:hover": { boxShadow: 6 } }}>
      <CardMedia
        component="img"
        alt={character.name}
        height="200"
        image={character.image}
      />
      <CardContent>
        <Typography variant="h6">{character.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {character.status} - {character.species}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default async function RickAndMortyPage() {
  const data = await fetchData();

  return (
    <Box sx={{ padding: 5, backgroundColor: "aliceblue" }}>
      <Typography variant="h4" gutterBottom>
        Personajes de Rick and Morty
      </Typography>

      <Grid container spacing={2}>
        {data.results.map((character) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
            <RickAndMortyCard character={character} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}