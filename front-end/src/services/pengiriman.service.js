import http from "../../http-common";

class PengirimanDataService {
  getAll(role) {
    return http.get(`/pengiriman?role=${role}`);
  }
  get(id) {
    return http.get(`/pengiriman/${id}`);
  }
  create(data) {
    return http.post("/pengiriman", data);
  }
  update(id, data) {
    return http.put(`/pengiriman/${id}`, data);
  }
  delete(id) {
    return http.delete(`/pengiriman/${id}`);
  }
  deleteAll() {
    return http.delete(`/pengiriman`);
  }
  exportData(startDate, endDate) {
    return http.get(
      `/pengiriman/export/downloadPengiriman?startDate=${startDate}&endDate=${endDate}`
    );
  }
}
export default new PengirimanDataService();