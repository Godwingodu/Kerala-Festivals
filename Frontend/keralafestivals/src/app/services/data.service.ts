import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  register(data: any) {
    return fetch('http://127.0.0.1:8000/user/',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
  }
  //<--------------geting token---------------->
  getToken(data: any) {
    return fetch('http://127.0.0.1:8000/tauth/',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
  }
  //<--------------getting token---------------->


  getguestevents() {
    return fetch('http://127.0.0.1:8000/gevent/',
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
  }

  getevents() {
    return fetch('http://127.0.0.1:8000/event/',
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': `Token ${localStorage.getItem('token')}`

        },
      })
  }

  addevents(formData: FormData) {
    return fetch('http://127.0.0.1:8000/event/',
      {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Token ${localStorage.getItem('token')}`
        },
      })
  }

  editevents(formData: FormData, id: any) {
    return fetch(`http://127.0.0.1:8000/event/${id}/`,
      {
        method: 'PUT',
        body: formData,
        headers: {
          'Authorization': `Token ${localStorage.getItem('token')}`
        },
      })
  }

  deleteevents(id: any) {
    return fetch(`http://127.0.0.1:8000/event/${id}/`,
      {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': `Token ${localStorage.getItem('token')}`
        },
      })
  }

  getspecificevents(id: any) {
    return fetch(`http://127.0.0.1:8000/event/${id}/`,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': `Token ${localStorage.getItem('token')}`
        },
      })
  }

  getspecificguestevents(id: any) {
    return fetch(`http://127.0.0.1:8000/gevent/${id}/`,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
  }

  subscribeduser(data: any) {
    return fetch('http://127.0.0.1:8000/subscribeduser/',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
  }

  booking() {
    return fetch('http://127.0.0.1:8000/booking/',
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',

        },
      })
  }
}
