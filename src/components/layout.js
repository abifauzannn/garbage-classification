export default function Layout({ children }) {
    return (
      <>

        <main 
          id="content"
          tabIndex="0"
          className="z-20 mt-20 md:mx-12 lg:mx-20"
        >
          {children}
        </main>

      </>
    );
  }