import Footer from '../../componentes/footer/footer';
import './termosUso.css';

const TermosUso = () => {
    return (
        <>
            <div className='estrutura'>
                <div className='bordas'>
                    <h1>Termos de uso para o site The Universe</h1>
                    <h2>1. Termos</h2>
                    <p>Ao acessar o site <a href="TheUniverse.com" style={{textDecoration: 'none', fontWeight: '400', color: '#000000'}}>The Universe</a>, você concorda em cumprir estes termos de serviço, bem como todas as leis e regulamentos aplicáveis. Caso não concorde com algum destes termos, você está proibido de utilizar ou acessar este site. Os materiais contidos neste site são protegidos por leis de direitos autorais e marcas comerciais aplicáveis.</p>

                    <h2>2. Uso de Licença</h2>
                    <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site The Universe apenas para visualização pessoal e transitória, sem fins comerciais. Esta é a concessão de uma licença, não uma transferência de propriedade, e sob esta licença, você não pode:</p>
                    <ul>
                        <li>Modificar ou copiar os materiais;</li>
                        <li>Utilizar os materiais para qualquer finalidade comercial ou exibição pública (comercial ou não comercial);</li>
                        <li>Tentar descompilar ou realizar engenharia reversa em qualquer software contido no site The Universe;</li>
                        <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais;</li>
                        <li>Transferir os materiais para outra pessoa ou espelhar os materiais em qualquer outro servidor.</li>
                    </ul>
                    <p>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e pode ser revogada por The Universe a qualquer momento. Ao encerrar a visualização dos materiais ou após o término da licença, você deve apagar todos os materiais baixados, sejam eletrônicos ou impressos.</p>

                    <h2>3. Isenção de Responsabilidade</h2>
                    <ul>
                        <li>Os materiais no site The Universe são fornecidos "como estão". The Universe não oferece garantias expressas ou implícitas e, por meio deste, isenta-se e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas de comercialização, adequação a um fim específico ou não violação de propriedade intelectual.</li>
                        <li>Além disso, The Universe não garante ou faz qualquer declaração sobre a precisão, os resultados prováveis ou a confiabilidade do uso dos materiais em seu site ou de outra forma relacionada a esses materiais ou em sites vinculados a este site.</li>
                    </ul>

                    <h2>4. Limitações</h2>
                    <p>Em nenhum caso The Universe ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, perda de dados, perda de lucros ou interrupção de negócios) decorrentes do uso ou da incapacidade de usar os materiais no site, mesmo que The Universe ou um representante autorizado tenha sido notificado da possibilidade de tais danos. Algumas jurisdições não permitem limitações em garantias implícitas ou responsabilidade por danos consequentes ou incidentais, portanto, essas limitações podem não se aplicar a você.</p>

                    <h2>5. Precisão dos Materiais</h2>
                    <p>Os materiais exibidos no site The Universe podem incluir erros técnicos, tipográficos ou fotográficos. The Universe não garante que qualquer material seja preciso, completo ou atualizado. As informações podem ser alteradas a qualquer momento sem aviso prévio, mas The Universe não se compromete a atualizar os materiais.</p>

                    <h2>6. Links</h2>
                    <p>The Universe não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de qualquer site vinculado. A inclusão de qualquer link não implica endosso por parte do The Universe. O uso de qualquer site vinculado é por conta e risco do usuário.</p>

                    <h2>Modificações</h2>
                    <p>The Universe pode revisar estes termos de serviço a qualquer momento, sem aviso prévio. Ao utilizar este site, você concorda em estar vinculado à versão mais recente destes termos.</p>

                    <h2>Lei Aplicável</h2>
                    <p>Estes termos e condições são regidos e interpretados de acordo com as leis do The Universe, e você concorda irrevogavelmente com a jurisdição exclusiva dos tribunais daquela localidade.</p>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default TermosUso;