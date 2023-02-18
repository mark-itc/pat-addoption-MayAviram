// import React, { useContext, useEffect } from "react";
// import { createContext, useState } from "react";
// import axios from "axios";
// import { UserContext } from "../context/UserProvider";

// const PetsContext = createContext();

// function PetsProvider({ children }) {
//   const [ownsfostersList, setOwnfostersList] = useState();
//   const [savedPetsList, setSavedPetsList] = useState();

//   const { user } = useContext(UserContext);

//   useEffect(() => {
//     let response;
//     const getPetsLists = async () => {
//       try {
//         if (user) {
//           response = await axios.get(
//             `http://localhost:3001/pet/user/${user.user._id}`
//           );

//           const data = response.data;
//           setOwnfostersList(data.pets.owned);
//           setSavedPetsList(data.pets.saved);
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     getPetsLists();
//   }, []);

//   return (
//     <PetsContext.Provider value={{ ownsfostersList, savedPetsList }}>
//       {children}
//     </PetsContext.Provider>
//   );
// }
// export { PetsProvider, PetsContext };

// const PetsContext = createContext();

// function PetsProvider({ children }) {
//   // const pets = [
//   //   {
//   //     id: 1,
//   //     image: "https://evcc.com/wp-content/uploads/2021/09/cat-gagging.jpg",
//   //     name: "cat1",
//   //     adoptionStatus: "adopted",
//   //     type: "cat",
//   //     height: "0.1",
//   //     weight: "1",
//   //     color: "grey",
//   //     bio: "",
//   //     hypoallergenic: "no",
//   //     dietaryRestrictions: null,
//   //     breedOfAnimal: "",
//   //   },
//   //   {
//   //     id: 2,
//   //     image:
//   //       "https://centralbrowardvet.com/wp-content/uploads/2021/12/signs-of-blocked-cat.jpg",
//   //     name: "cat2",
//   //     adoptionStatus: "adopted",
//   //     type: "cat",
//   //     height: "0.1",
//   //     weight: "1",
//   //     color: "grey",
//   //     bio: "",
//   //     hypoallergenic: "no",
//   //     dietaryRestrictions: null,
//   //     breedOfAnimal: "",
//   //   },
//   //   {
//   //     id: 3,
//   //     image:
//   //       "https://t4.ftcdn.net/jpg/01/84/41/49/360_F_184414982_SOhPD7mVajP92AVkrGnwr6iXOg6aQX3j.jpg",
//   //     name: "dog1",
//   //     adoptionStatus: "adopted",
//   //     type: "cat",
//   //     height: "0.1",
//   //     weight: "1",
//   //     color: "grey",
//   //     bio: "",
//   //     hypoallergenic: "no",
//   //     dietaryRestrictions: null,
//   //     breedOfAnimal: "",
//   //   },
//   //   {
//   //     id: 4,
//   //     image:
//   //       "https://cf.ltkcdn.net/life-with-pets/pet-loss/images/std-lg/320484-1200x800-dying-behavior-cats.webp",
//   //     name: "dog1",
//   //     adoptionStatus: "adopted",
//   //     type: "cat",
//   //     height: "0.1",
//   //     weight: "1",
//   //     color: "grey",
//   //     bio: "",
//   //     hypoallergenic: "no",
//   //     dietaryRestrictions: null,
//   //     breedOfAnimal: "",
//   //   },
//   //   {
//   //     id: 5,
//   //     image:
//   //       "https://media.npr.org/assets/artslife/books/2010/11/good-old-dog/dog-3b6e633181bc7dd992cb73e1445db690d4212159-s600-c85.webp",
//   //     name: "dog1",
//   //     adoptionStatus: "adopted",
//   //     type: "cat",
//   //     height: "0.1",
//   //     weight: "1",
//   //     color: "grey",
//   //     bio: "",
//   //     hypoallergenic: "no",
//   //     dietaryRestrictions: null,
//   //     breedOfAnimal: "",
//   //   },
//   //   {
//   //     id: 6,
//   //     image:
//   //       "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg?w=2141",
//   //     name: "dog1",
//   //     adoptionStatus: "adopted",
//   //     type: "cat",
//   //     height: "0.1",
//   //     weight: "1",
//   //     color: "grey",
//   //     bio: "",
//   //     hypoallergenic: "no",
//   //     dietaryRestrictions: null,
//   //     breedOfAnimal: "",
//   //   },
//   //   {
//   //     id: 7,
//   //     image:
//   //       "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/G7F7CDA774I63AATSFCLQCU2D4.jpg&w=1200",
//   //     name: "dog1",
//   //     adoptionStatus: "adopted",
//   //     type: "cat",
//   //     height: "0.1",
//   //     weight: "1",
//   //     color: "grey",
//   //     bio: "",
//   //     hypoallergenic: "no",
//   //     dietaryRestrictions: null,
//   //     breedOfAnimal: "",
//   //   },
//   //   {
//   //     id: 8,
//   //     image: "    https://www.cdc.gov/worldrabiesday/images/dogs.jpg?_=71573",
//   //     name: "dog1",
//   //     adoptionStatus: "adopted",
//   //     type: "cat",
//   //     height: "0.1",
//   //     weight: "1",
//   //     color: "grey",
//   //     bio: "",
//   //     hypoallergenic: "no",
//   //     dietaryRestrictions: null,
//   //     breedOfAnimal: "",
//   //   },
//   // ];
//   // const [petsList, setPetsList] = useState(pets);
//   // const [ownsfostersList, setOwnfostersList] = useState([
//   //   pets[0],
//   //   pets[1],
//   //   pets[2],
//   //   pets[3],
//   //   pets[7],
//   // ]);
//   // const [savedPetsList, setSavedPetsList] = useState([
//   //   pets[2],
//   //   pets[3],
//   //   pets[4],
//   //   pets[5],
//   //   pets[6],
//   // ]);
//   // const [petsList, setPetsList] = useState();
//   // const [ownsfostersList, setOwnfostersList] = useState();
//   // const [savedPetsList, setSavedPetsList] = useState();

//   useEffect(() => {
//     const getPetsList = async () => {
//       try {
//         const localPets = await localforage.getItem("pets");
//         if (!localPets) {
//           const response = await axios.get("http://localhost:3001/pet");
//           const data = response.data;
//           console.log("pets data: ", data.pets);
//           // setPetsList(data.pets);
//           // setOwnfostersList(data.pets.slice(0, 5));
//           // setSavedPetsList(data.pets.slice(3, 7));
//           await localforage.setItem("pets", data.pets);
//           // setPetsList(null);
//           // setOwnfostersList(null);
//           // setSavedPetsList(null);
//           return;
//         } else {
//           // setPetsList(localPets);
//           // setOwnfostersList(localPets.slice(0, 5));
//           // setSavedPetsList(localPets.slice(3, 7));
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     getPetsList();
//   }, []);

//   // useEffect(() => {
//   //   console.log("petsList provider: ", petsList);
//   // }, [petsList]);
//   // const [ownsfostersList, setOwnfostersList] = useState(petsList.slice(0, 5));
//   // const [savedPetsList, setSavedPetsList] = useState(petsList.slice(3, 7));

//   // console.log(petsList);
//   // const ownsfostersList = [];
//   // const savedPetsList = [];
//   return (
//     <PetsContext.Provider value={{ petsList, ownsfostersList, savedPetsList }}>
//       {children}
//     </PetsContext.Provider>
//   );
// }

// export { PetsProvider, PetsContext };
