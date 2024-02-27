const Loading = (Comp) => {
  return function ({ isLoading, data }) {
    return (
      <>
        {!isLoading ? (
          <Comp data={data} />
        ) : (
          <span>Please wait data is Loading...</span>
        )}
      </>
    );
  };
};

export default Loading;
