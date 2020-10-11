const employs = {};
const Empleado = require("../models/employee");

employs.obtenerempleados = async (req, res) =>{
    const empleado = await Empleado.find();
    res.json(empleado);
}

employs.crearempleado = async (req, res) =>{
    const nuevoEmpleado = new Empleado(req.body);
    console.log(nuevoEmpleado);
    await nuevoEmpleado.save();

    res.send({message: "Empleado Guardado"});
}

employs.obtenerempleado = async (req, res) =>{
    const empleado = await Empleado.findById(req.params.id);
    res.send(empleado);
}

employs.editarempleado = async (req, res) =>{
    await Empleado.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: "Empleado Actualizado"});
}

employs.eliminarempleado = async (req, res) =>{
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({status: "Empleado Eliminado"});
}

module.exports = employs;