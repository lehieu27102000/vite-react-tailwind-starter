import React,{useState, useEffect, useMemo, useCallback, useRef, useContext} from 'react'
import {NumberContext} from '../views/Home'
import Nav from './Nav'
interface Props {
  title: string,
  subTitle: string,
}
const Header: React.FC<Props> = ({ title, subTitle }) => {
  const number = useContext(NumberContext)
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-red-600">
          {title} {subTitle} {number}
        </h1>
      </div>
    </header>
  );
};

export default Header
