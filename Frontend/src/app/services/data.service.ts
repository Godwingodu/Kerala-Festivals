import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  register(data: any) {
    return fetch('https://kera-a-festivals.onrender.com/user/',
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
    return fetch('https://kera-a-festivals.onrender.com/tauth/',
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
    return fetch('https://kera-a-festivals.onrender.com/gevent/',
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
  }

  getevents() {
    return fetch('https://kera-a-festivals.onrender.com/event/',
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': `Token ${localStorage.getItem('token')}`

        },
      })
  }

  addevents(formData: FormData) {
    return fetch('https://kera-a-festivals.onrender.com/event/',
      {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Token ${localStorage.getItem('token')}`
        },
      })
  }

  editevents(formData: FormData, id: any) {
    return fetch(`https://kera-a-festivals.onrender.com/event/${id}/`,
      {
        method: 'PUT',
        body: formData,
        headers: {
          'Authorization': `Token ${localStorage.getItem('token')}`
        },
      })
  }

  deleteevents(id: any) {
    return fetch(`https://kera-a-festivals.onrender.com/event/${id}/`,
      {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': `Token ${localStorage.getItem('token')}`
        },
      })
  }

  getspecificevents(id: any) {
    return fetch(`https://kera-a-festivals.onrender.com/event/${id}/`,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': `Token ${localStorage.getItem('token')}`
        },
      })
  }

  getspecificguestevents(id: any) {
    return fetch(`https://kera-a-festivals.onrender.com/gevent/${id}/`,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
  }

  subscribeduser(data: any) {
    return fetch('https://kera-a-festivals.onrender.com/subscribeduser/',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
  }

  booking() {
    return fetch('https://kera-a-festivals.onrender.com/booking/',
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',

        },
      })
  }
}
