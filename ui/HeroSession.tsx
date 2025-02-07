"use client";

import { useEffect, useState } from "react";
import Modal from "react-modal";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnimeForm from "./AnimeForm";

// Configuration de react-toastify (doit être dans l'application principale)
import { ToastContainer } from "react-toastify";

const HeroSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      Modal.setAppElement(document.body);
    }
  }, []);

  // Fonction pour afficher la notification après ajout d'un anime
  const handleValidate = () => {
    toast.success("Anime ajouté avec succès !", {
      position: "top-right",
      autoClose: 3000, // Durée d'affichage
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
    setModalIsOpen(false); // Ferme le modal après validation
  };

  return (
    <div className="bg-gradient-to-r from-blue-300 via-purple-400 to-pink-300 text-white py-16 px-3 rounded-lg shadow-lg flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-center mb-4">
        Track Your Anime Journey Like Never Before
      </h1>
      <p className="text-lg mb-6 text-center">
        Discover, watch, and manage all your favorite anime with our intuitive
        dashboard.
      </p>
      <button
        onClick={() => setModalIsOpen(true)}
        className="bg-white text-blue-600 hover:bg-gray-100 text-sm font-semibold px-6 py-3 rounded-full flex items-center space-x-2"
      >
        <FaPlus />
        <span className="ml-2">Add New Anime</span>
      </button>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)} // Ferme en cliquant dehors ou avec ESC
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        contentLabel="Add Anime Modal"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        className="bg-white p-6 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-semibold mb-4">Add New Anime</h2>
        <AnimeForm formeValidate={handleValidate} closeModal={() => setModalIsOpen(false)} />
      </Modal>      
    </div>
  );
};

export default HeroSection;
