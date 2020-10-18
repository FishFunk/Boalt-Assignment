class ApiService {
    // Get shipping date JSON
    // Example response: '{"iphone":"2020/02/21","mackbook":"2020/08/04","watch":"2020/11/16"}'
    getShippingDates(){
        return new Promise((resolve, reject)=>{
            fetch("https://boalt-interview.herokuapp.com/api/shipping-dates")
                .then(res => res.json())
                .then((result) => {
                    resolve(result);
                },
                (error) => reject(error));
        });
    }
   
}

const instance = new ApiService();
export default instance;