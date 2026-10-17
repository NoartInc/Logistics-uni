import http from "../../http-common";

class HelperDataService {
  getAll() {
    return http.get("/helper");
  }
  get(id) {
    return http.get(`/helper/${id}`);
  }
  create(data) {
    return http.post("/helper", data);
  }
  update(id, data) {
    return http.put(`/helper/${id}`, data);
  }
  delete(id) {
    return http.delete(`/helper/${id}`);
  }
  deleteAll() {
    return http.delete(`/helper`);
  }
}
export default new HelperDataService();
