import { pool } from "../database/db.js";

class EquipamentoService {
    async listarEquipamento(){
        const res = await pool.query("SELECT * FROM equipamento")
        return res.rows
    }
}

export const equipamentoService = new EquipamentoService()