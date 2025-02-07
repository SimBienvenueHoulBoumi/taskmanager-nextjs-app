import { FC, FormEvent } from "react";

interface AnimeFormProps {
  closeModal: () => void;
  formeValidate: () => void;
}

const AnimeForm: FC<AnimeFormProps> = ({ closeModal, formeValidate }) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); // Empêche le rechargement de la page
    formeValidate(); // Déclenche la validation
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-semibold">Anime Title</label>
        <input
          type="text"
          className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
          placeholder="Enter anime title"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-semibold">Genre</label>
        <input
          type="text"
          className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
          placeholder="Enter genre"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-semibold">Description</label>
        <textarea
          className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
          rows={4}
          placeholder="Enter a brief description"
          required
        ></textarea>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="submit" // Maintenant, ce bouton valide le formulaire
          className="px-6 py-2 bg-gray-300 text-black rounded-full"
        >
          Add Anime
        </button>
        <button
          type="button"
          className="px-6 py-2 bg-red-500 text-white rounded-full"
          onClick={closeModal} // Ferme le modal
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AnimeForm;
