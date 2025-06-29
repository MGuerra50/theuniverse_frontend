import { ErrorMessage, Field, Formik } from 'formik';
import './formulario.css';
import * as Yup from "yup";
import { Form } from 'formik';

type FormularioContato = {
    titulo: string | null;
    texto: string | null;
}

const Formulario = () => {

    const valoresIniciais: FormularioContato = {
        titulo: "",
        texto: ""
    };

    const validacaoSchema = Yup.object({
        titulo: Yup.string().min(10, "Título deve ter no mínimo 10 caracteres").required("É necessário ter um título"),
        texto: Yup.string().min(15, "Descreva bem sua mensagem, com no mínimo 15 caracteres").required("É necessário preencher esse campo")
    })

    const handleSubmit = (values: FormularioContato, { resetForm }: { resetForm: () => void }) => {
        console.log("Dados enviados: \n", values)
        alert("Mensagem enviada com sucesso!")
        resetForm();
    }

    return (
        <>
            <div className='espacoForm'>
                <h3 className='tituloForm'>Entre em contato conosco</h3>
                <Formik
                    initialValues={valoresIniciais}
                    validationSchema={validacaoSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className='flexCont'>
                                <label className='labelForm'>Título </label>
                                <Field type="text" name="titulo" className="campoForm" placeholder="Escreva seu título aqui" />
                                <ErrorMessage name='titulo' component="span" />
                            </div>
                            <div className='flexCont'>
                                <label className='labelForm' id='texto'>Texto </label>
                                <Field type="text" name="texto" className="campoForm" placeholder="Escreva seu texto aqui" />
                                <ErrorMessage name='texto' component="span" />
                            </div>
                            <div className='espacoButton'>
                                <button type='submit' disabled={isSubmitting} className='buttonForm'>
                                    {isSubmitting ? "Enviando..." : "Enviar"}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default Formulario;