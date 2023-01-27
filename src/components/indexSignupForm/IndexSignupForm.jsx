import { Link } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import css from './IndexSignupForm.module.scss'
import { useContext } from 'react';
import { UserContext } from '../../utils/UserContext';


function IndexSignupForm() {
    const { state, dispatch } = useContext(UserContext)

  return (
      <div className={css.inputs_con}>
          <input
              type="email"
              value={state.email}
              name='email'
              placeholder='Email address'
              onChange={(e) => dispatch({ type: 'email', payload: e.target.value })}
              required={true}
          />
          <Link to={'/signup/password'} className={css.btn}>
              <span>Get Started</span>
              <ArrowForwardIosIcon className={css.icon} />

          </Link>
    </div>
  )
}

export default IndexSignupForm