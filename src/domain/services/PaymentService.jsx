import Api from "@/utils/Api";

class PaymentService {
    static async createPayment(data) {
        const response = await Api.post("/transactions", data);
        console.log(response);
        return response.data;
    }

    static async getInformationPayment() {
        const response = await Api.get("/transactions");
        return response.data;
    }
}

export default PaymentService;