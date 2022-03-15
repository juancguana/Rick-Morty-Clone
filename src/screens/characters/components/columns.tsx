import { Skeleton, Typography } from "@mui/material";
import Link from "next/link";

export const columnsCustom = [
  {
    name: "id",
    label: "ID",
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value: string) => {
        return (
          <Link href={`/characters/${value}`}>
            <Typography variant="body2" sx={{ textDecoration: "underline" }}>
              {value}
            </Typography>
          </Link>
        );
      },
    },
  },
  {
    name: "name",
    label: "Nombre",
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value: string) => {
        return <Typography>{value}</Typography>;
      },
    },
  },
  {
    name: "status",
    label: "Estado",
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value: string) => {
        return <Typography>{value}</Typography>;
      },
    },
  },
  {
    name: "species",
    label: "Especie",
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value: string) => {
        return <Typography>{value}</Typography>;
      },
    },
  },
  {
    name: "gender",
    label: "Genero",
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value: string) => {
        return <Typography>{value}</Typography>;
      },
    },
  },
  {
    name: "location",
    label: "Ubicacion actual",
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value: { name: string; dimension: string }) => {
        return <Typography>{value.name}</Typography>;
      },
    },
  },
  {
    name: "location",
    label: "Dimension actual",
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value: { name: string; dimension: string }) => {
        return <Typography>{value.dimension}</Typography>;
      },
    },
  },
];
