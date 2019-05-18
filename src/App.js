import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div classNameName="App">
      <div className="col-lg-3 col-sm-6">
        <div className="card hover-shadow-lg">
          <div className="card-body text-center">
            <div className="avatar-parent-child">
              <img alt="Image placeholder" src="../assets/img/theme/light/team-2-800x800.jpg" className="avatar rounded-circle avatar-lg" />
              <span className="avatar-child avatar-badge bg-warning"></span>
            </div>
            <h5 className="h6 mt-4 mb-0">Heather Wright</h5>
            <a href="#" className="d-block text-sm text-muted mb-3">@heather.wright</a>
            <div className="actions d-flex justify-content-between px-4">
              <a href="#" className="action-item">
                <i className="fas fa-user-edit"></i>
              </a>
              <a href="#" className="action-item">
                <i className="fas fa-bell"></i>
              </a>
              <a href="#" className="action-item">
                <i className="fas fa-trash-alt"></i>
              </a>
            </div>
          </div>
          <div className="card-body border-top">
            <div className="row justify-content-between align-items-center">
              <div className="col-6">
                <div>
                  <div className="spark-chart" data-toggle="spark-chart" data-type="line" data-height="50" data-color="warning" data-dataset="[58, 76, 13, 59, 17, 76, 13, 13, 21, 94, 49]"></div>
                </div>
              </div>
              <div className="col-auto text-center">
                <span className="d-block h4 mb-0">8</span>
                <span className="d-block text-sm text-muted">Open tasks</span>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="actions d-flex justify-content-between">
              <a href="#" className="action-item">
                <span className="btn-inner--icon">Projects</span>
              </a>
              <a href="#" className="action-item">
                <span className="btn-inner--icon">See profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
