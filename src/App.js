import './App.css';
import Register from './Auth/Register';
import Dashboard from './Component/Dashboard';
import Forgetmail from './Auth/Forgetmail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Resetpass from './Auth/Resetpass';
import UserPlan from './Auth/UserPlan';
import SigninCompo from './Auth/SigninCompo';
import ContactDetails from './Pages/ContactDetails';
import CopyPaste from './Pages/CopyPaste';
import UploadFile from './Pages/UploadFile';
import ImportExisting from './Pages/ImportExisting';
import QuestionForm1 from './Question/QuestionForm1';
function App() {
  return (
    <div class="wrapper">
      {/* <Dashboard /> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/forgetmail' element={<Forgetmail />} />
          <Route path='/resetpass' element={<Resetpass />} />
          <Route path='/plan' element={<UserPlan />} />
          <Route path='/signin' element={<SigninCompo />} />

          <Route path='/onboarding' element={<QuestionForm1 />} />

          <Route path='/contactdetails' element={<ContactDetails />} />
          <Route path='/copy&paste' element={<CopyPaste />} />
          <Route path='/uploadfile' element={<UploadFile />} />
          <Route path='/importexisting' element={<ImportExisting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;