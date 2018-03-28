class ReducersRegistry {
  _emitChanges = null
  _reducers = {}

  getReducers() {
    return {...this._reducers}
  }

  register(name, reducer) {
    this._reducers = {...this._reducers, [name]: reducer}
    if (this._emitChanges) {
      this._emitChanges(this.getReducers())
    }
  }

  setChangeListener(listener) {
    this._emitChanges = listener
  }
}

export const reducersRegistry = new ReducersRegistry()
