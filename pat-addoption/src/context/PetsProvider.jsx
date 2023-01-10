import React from "react";
import { createContext, useState } from "react";

const PetsContext = createContext();

function PetsProvider({ children }) {
  const pets = [
    {
      id: 1,
      Image: "https://evcc.com/wp-content/uploads/2021/09/cat-gagging.jpg",
      Name: "cat1",
      currentStatus: "adopted",
      type: "cat",
      height: "0.1",
      weight: "1",
      color: "grey",
      bio: "",
      hypoallergenic: "no",
      dietaryRestrictions: null,
      breedOfAnimal: "",
    },
    {
      id: 2,
      Image:
        "https://centralbrowardvet.com/wp-content/uploads/2021/12/signs-of-blocked-cat.jpg",
      Name: "cat2",
      currentStatus: "adopted",
      type: "cat",
      height: "0.1",
      weight: "1",
      color: "grey",
      bio: "",
      hypoallergenic: "no",
      dietaryRestrictions: null,
      breedOfAnimal: "",
    },
    {
      id: 3,
      Image:
        "https://t4.ftcdn.net/jpg/01/84/41/49/360_F_184414982_SOhPD7mVajP92AVkrGnwr6iXOg6aQX3j.jpg",
      Name: "dog1",
      currentStatus: "adopted",
      type: "cat",
      height: "0.1",
      weight: "1",
      color: "grey",
      bio: "",
      hypoallergenic: "no",
      dietaryRestrictions: null,
      breedOfAnimal: "",
    },
    {
      id: 4,
      Image:
        "https://cf.ltkcdn.net/life-with-pets/pet-loss/images/std-lg/320484-1200x800-dying-behavior-cats.webp",
      Name: "dog1",
      currentStatus: "adopted",
      type: "cat",
      height: "0.1",
      weight: "1",
      color: "grey",
      bio: "",
      hypoallergenic: "no",
      dietaryRestrictions: null,
      breedOfAnimal: "",
    },
    {
      id: 5,
      Image:
        "https://media.npr.org/assets/artslife/books/2010/11/good-old-dog/dog-3b6e633181bc7dd992cb73e1445db690d4212159-s600-c85.webp",
      Name: "dog1",
      currentStatus: "adopted",
      type: "cat",
      height: "0.1",
      weight: "1",
      color: "grey",
      bio: "",
      hypoallergenic: "no",
      dietaryRestrictions: null,
      breedOfAnimal: "",
    },
    {
      id: 6,
      Image:
        "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg?w=2141",
      Name: "dog1",
      currentStatus: "adopted",
      type: "cat",
      height: "0.1",
      weight: "1",
      color: "grey",
      bio: "",
      hypoallergenic: "no",
      dietaryRestrictions: null,
      breedOfAnimal: "",
    },
    {
      id: 7,
      Image:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/G7F7CDA774I63AATSFCLQCU2D4.jpg&w=1200",
      Name: "dog1",
      currentStatus: "adopted",
      type: "cat",
      height: "0.1",
      weight: "1",
      color: "grey",
      bio: "",
      hypoallergenic: "no",
      dietaryRestrictions: null,
      breedOfAnimal: "",
    },
    {
      id: 8,
      Image: "    https://www.cdc.gov/worldrabiesday/images/dogs.jpg?_=71573",
      Name: "dog1",
      currentStatus: "adopted",
      type: "cat",
      height: "0.1",
      weight: "1",
      color: "grey",
      bio: "",
      hypoallergenic: "no",
      dietaryRestrictions: null,
      breedOfAnimal: "",
    },
  ];
  const [petsList, setPetsList] = useState(pets);

  return (
    <PetsContext.Provider value={{ petsList }}>{children}</PetsContext.Provider>
  );
}

export { PetsProvider, PetsContext };
