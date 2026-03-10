export const productsList = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // This is your array of products
    }

    catch (err) {
        // console.log("err", err);
        // setError(err);
        // console.log("Daily error catch", );
        // setWeatherData(null);
    }

    finally {
        // setLoading(false);
    }

};

