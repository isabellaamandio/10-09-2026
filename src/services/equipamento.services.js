import { pool } from "../database/db.js";

class EquipamentoService {
    async listarEquipamento(){
        const res = await pool.query("SELECT * FROM equipamento")
        return res.rows
    }
    async buscarPorId(id) { 
        const res = await pool.query( "SELECT * FROM equipamentos WHERE id = $1", [id] );
         return res.rows[0] || null; 
    }
    async cadastrar(nome, categoria, condicao_uso, disponibilidade){
         const res = await pool.query( `INSERT INTO equipamentos (nome, categoria, condicao_uso, disponibilidade) 
         VALUES ($1, $2, $3, $4) 
         RETURNING *`, [nome, categoria, condicao_uso, disponibilidade] );
         return res.rows[0]; 
    }
    async atualizarDisponibilidade(id, disponibilidade) {
         const res = await pool.query( `UPDATE equipamentos SET disponibilidade = $1 WHERE id = $2 RETURNING *`, [disponibilidade, id] );
          return res.rows[0] || null; }
}

export const equipamentoService = new EquipamentoService()