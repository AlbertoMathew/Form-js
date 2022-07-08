import React, { Component } from 'react'
import './CSS/todo.css'






class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            noPendaftaran: "",
            program: "",
            nama: "",
            gender: "",
            tempatLahir: "",
            tanggalLahir: "",
            agama: "",
            alamat: "",
            noTelpon: "",
            alamat: "",
            //gender: "",


        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            noPendaftaran: event.target.value
        })
    }
    programhandler = (event) => {
        this.setState({
            program: event.target.value
        })
    }
    namahandler = (event) => {
        this.setState({
            nama: event.target.value
        })
    }
    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    tempatLahirhandler = (event) => {
        this.setState({
            tempatLahir: event.target.value
        })
    }
    tanggalLahirhandler = (event) => {
        this.setState({
            tanggalLahir: event.target.value
        })
    }
    agamahandler = (event) => {
        this.setState({
            agama: event.target.value
        })
    }
    alamathandler = (event) => {
        this.setState({
            alamat: event.target.value
        })
    }
    noTelponhandler = (event) => {
        this.setState({
            noTelpon: event.target.value
        })
    }
    alamathandler = (event) => {
        this.setState({
            alamat: event.target.value
        })
    }



    handleSubmit = (event) => {
        alert(`${this.state.noPendaftaran} ${this.state.nama}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            noPendaftaran: "",
            program: "",
            nama: "",
            gender: "",
            tempatLahir: "",
            tanggalLahir: "",
            agama: "",
            alamat: "",
            noTelpon: "",
            alamat: "",
        })
        event.preventDefault()

    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>User Registration</h1>
                    <label>No. Pendaftaran :</label> <input type="text" value={this.state.noPendaftaran} onChange={this.firsthandler} placeholder="noPendaftaran..." /><br />
                    <label>Program Studi yang dipilih :</label><select onChange={this.programhandler} defaultValue="Select Studi">
                        <option defaultValue>Select Studi</option>
                        <option value="tekom">Tekom</option>
                        <option value="industri">industri</option>
                    </select><br />
                    <label>nama :</label> <input type="text" value={this.state.nama} onChange={this.namahandler} placeholder="nama..." /><br />
                    <label>Jenis kelamin :</label><select onChange={this.genderhandler} defaultValue="Select kelamin">

                    </select><br />
                    <label>Tanggal Lahir :</label> <input type="tanggal" value={this.state.tanggalLahir} onChange={this.tanggalLahirhandler} placeholder="tanggalLahir..." /><br />
                    <label>agama :</label><select onChange={this.agamahandler} defaultValue="Select agama">
                        <option defaultValue>Select Gender</option>
                        <option value="kristen">Kristen</option>
                        <option value="islam">Islam</option>
                        <option value="buddha">Buddha</option>
                        <option value="hindu">Hindu</option>
                        <option value="khonghucu">Khonghucu</option>
                        <label>Alamat Lengkap :</label> <input type="alamat" value={this.state.alamat} onChange={this.alamathandler} placeholder="alamat..." /><br />
                        <label>No. Telpon :</label> <input type="noTelpon" value={this.state.noTelpon} onChange={this.noTelponhandler} placeholder="noTelpon..." /><br />
                        <label>email :</label> <input type="email" value={this.state.email} onChange={this.emailhandler} placeholder="email..." /><br />
                    </select><br />
                    <input type="submit" value="Submit" />
                </form>

            </div>

        )
    }
}




export default Form