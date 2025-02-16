
const Copyright = () => {
    return (
      <footer className="footer container mx-auto flex justify-center items-center p-4  ">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <h3 className="font-bold text-2xl">Chill Gamer</h3>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </div>
      </footer>
    );
};

export default Copyright;